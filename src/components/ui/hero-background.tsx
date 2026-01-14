import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Theme detection
    const isDarkMode = () => document.documentElement.classList.contains('dark')

    // Theme colors
    const getColors = () => {
      const dark = isDarkMode()
      return {
        earth: dark ? 0x0f766e : 0x0f766e,
        earthOpacity: dark ? 0.12 : 0.25,
        glow: dark ? 0x0f766e : 0x14b8a6,
        glowOpacity: dark ? 0.05 : 0.08,
        satellite: dark ? 0xffffff : 0x0f766e,
        satelliteOpacity: dark ? 0.4 : 0.6,
        stars: dark ? 0xffffff : 0x78716c,
        starsOpacity: dark ? 0.6 : 0.3,
      }
    }

    let colors = getColors()

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 25
    camera.position.y = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Main group (for camera angle/tilt via mouse)
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // Earth group (for self-rotation)
    const earthGroup = new THREE.Group()
    mainGroup.add(earthGroup)

    // Earth - wireframe sphere (reduced grid)
    const earthGeometry = new THREE.SphereGeometry(6, 16, 12)
    const earthMaterial = new THREE.MeshBasicMaterial({
      color: colors.earth,
      wireframe: true,
      transparent: true,
      opacity: colors.earthOpacity
    })
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    earthGroup.add(earth)

    // Earth glow (inner)
    const glowGeometry = new THREE.SphereGeometry(5.9, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: colors.glow,
      transparent: true,
      opacity: colors.glowOpacity,
      side: THREE.BackSide
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    earthGroup.add(glow)

    // Satellite group (for orbiting around Earth)
    const satelliteGroup = new THREE.Group()
    mainGroup.add(satelliteGroup)


    // Starlink satellites
    interface Satellite {
      mesh: THREE.Mesh
      orbit: number
      angle: number
      speed: number
      // Orbital plane orientation (for true 3D orbits)
      tiltX: number
      tiltZ: number
    }

    const satellites: Satellite[] = []
    const satelliteGeometry = new THREE.SphereGeometry(0.06, 8, 8)
    const satelliteMaterial = new THREE.MeshBasicMaterial({
      color: colors.satellite,
      transparent: true,
      opacity: colors.satelliteOpacity
    })

    // Create satellites in true 3D orbits around Earth
    const satelliteCount = 60
    for (let i = 0; i < satelliteCount; i++) {
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial.clone())

      // Random orbital plane orientation for 3D distribution
      const tiltX = (Math.random() - 0.5) * Math.PI  // -90 to +90 degrees
      const tiltZ = (Math.random() - 0.5) * Math.PI  // -90 to +90 degrees

      satellites.push({
        mesh: satellite,
        orbit: 6.8 + Math.random() * 1.2,  // 6.8 to 8.0 radius
        angle: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.2,
        tiltX: tiltX,
        tiltZ: tiltZ,
      })

      satelliteGroup.add(satellite)
    }


    // Stars background
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 3000
    const starsPositions = new Float32Array(starsCount * 3)

    for (let i = 0; i < starsCount * 3; i += 3) {
      const radius = 50 + Math.random() * 100
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      starsPositions[i] = radius * Math.sin(phi) * Math.cos(theta)
      starsPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      starsPositions[i + 2] = radius * Math.cos(phi)
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3))

    const starsMaterial = new THREE.PointsMaterial({
      color: colors.stars,
      size: 0.15,
      transparent: true,
      opacity: colors.starsOpacity,
      sizeAttenuation: true
    })

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Theme change observer
    const updateThemeColors = () => {
      colors = getColors()
      earthMaterial.color.setHex(colors.earth)
      earthMaterial.opacity = colors.earthOpacity
      glowMaterial.color.setHex(colors.glow)
      glowMaterial.opacity = colors.glowOpacity
      satelliteMaterial.color.setHex(colors.satellite)
      satelliteMaterial.opacity = colors.satelliteOpacity
      starsMaterial.color.setHex(colors.stars)
      starsMaterial.opacity = colors.starsOpacity
      // Update existing satellites
      satellites.forEach(sat => {
        if (sat.mesh.material instanceof THREE.MeshBasicMaterial) {
          sat.mesh.material.color.setHex(colors.satellite)
        }
      })
    }

    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateThemeColors()
        }
      })
    })

    themeObserver.observe(document.documentElement, { attributes: true })

    // Click effects
    interface ClickEffect {
      type: 'satellite'
      life: number
      data?: Record<string, unknown>
    }

    const clickEffects: ClickEffect[] = []

    // Effect: Launch satellites
    const launchSatellites = () => {
      for (let i = 0; i < 10; i++) {
        const newSatellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial.clone())
        const targetOrbit = 6.8 + Math.random() * 1.2
        const tiltX = (Math.random() - 0.5) * Math.PI
        const tiltZ = (Math.random() - 0.5) * Math.PI

        newSatellite.position.set(0, 0, 0)
        satelliteGroup.add(newSatellite)

        const satData: Satellite = {
          mesh: newSatellite,
          orbit: 0.1,
          angle: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.2,
          tiltX,
          tiltZ
        }
        satellites.push(satData)

        clickEffects.push({
          type: 'satellite',
          life: 1.0,
          data: { satellite: satData, targetOrbit }
        })
      }
    }

    // Click handler
    const handleClick = () => {
      launchSatellites()
    }

    container.addEventListener('click', handleClick)

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.targetX = ((event.clientX - rect.left) / width) * 2 - 1
      mouseRef.current.targetY = -((event.clientY - rect.top) / height) * 2 + 1
    }

    container.addEventListener('mousemove', handleMouseMove)

    // Touch handler for mobile
    const handleTouch = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const rect = container.getBoundingClientRect()
        const touch = event.touches[0]
        mouseRef.current.targetX = ((touch.clientX - rect.left) / width) * 2 - 1
        mouseRef.current.targetY = -((touch.clientY - rect.top) / height) * 2 + 1
      }
    }

    container.addEventListener('touchmove', handleTouch)

    // Animation
    const clock = new THREE.Clock()
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse following
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Fixed tilt for Earth view
      mainGroup.rotation.x = 0.3

      // Earth self-rotation
      earthGroup.rotation.y = elapsedTime * 0.1

      // Mouse interaction only affects satellite group
      satelliteGroup.rotation.x = mouseRef.current.y * 0.3
      satelliteGroup.rotation.y = mouseRef.current.x * 0.5

      // Update satellite positions (true 3D orbits around Earth)
      satellites.forEach((sat) => {
        sat.angle += sat.speed * 0.01

        // Calculate position on a tilted orbital plane
        const baseX = Math.cos(sat.angle) * sat.orbit
        const baseY = Math.sin(sat.angle) * sat.orbit

        // Apply orbital plane tilt for 3D distribution
        const x = baseX
        const y = baseY * Math.cos(sat.tiltX)
        const z = baseY * Math.sin(sat.tiltX) * Math.cos(sat.tiltZ) + baseX * Math.sin(sat.tiltZ) * 0.3

        sat.mesh.position.set(x, y, z)

        // Subtle pulse effect
        const pulse = 0.3 + Math.sin(elapsedTime * 2 + sat.angle) * 0.15
        if (sat.mesh.material instanceof THREE.MeshBasicMaterial) {
          sat.mesh.material.opacity = pulse
        }
      })

      // Rotate stars slowly
      stars.rotation.y = elapsedTime * 0.01

      // Update click effects (satellite launch)
      for (let i = clickEffects.length - 1; i >= 0; i--) {
        const effect = clickEffects[i]

        if (effect.type === 'satellite' && effect.data) {
          const sat = effect.data.satellite as Satellite
          const targetOrbit = effect.data.targetOrbit as number
          sat.orbit = Math.min(sat.orbit + 0.15, targetOrbit)
          if (sat.orbit >= targetOrbit) {
            clickEffects.splice(i, 1)
          }
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      themeObserver.disconnect()
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('touchmove', handleTouch)
      container.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      earthGeometry.dispose()
      earthMaterial.dispose()
      glowGeometry.dispose()
      glowMaterial.dispose()
      satelliteGeometry.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
      satellites.forEach(sat => {
        if (sat.mesh.material instanceof THREE.Material) {
          sat.mesh.material.dispose()
        }
      })
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'auto' }}
    />
  )
}
