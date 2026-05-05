'use client'

import Link from 'next/link'
import { useRef } from 'react'
import styles from '@/app/page.module.css'

interface ProjectCardProps {
  slug: string
  title: string
  company?: string
  problem: string
  solution: string
  techStack: string[]
  ctaLabel?: string
}

export default function ProjectCard({
  slug,
  title,
  company,
  problem,
  solution,
  techStack,
  ctaLabel = "Voir l'approche",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((rect.height / 2 - y) / (rect.height / 2)) * 7
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 7
    card.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease, border-color 0.3s ease'
    card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`
    card.style.boxShadow = '0 24px 60px rgba(25, 43, 194, 0.18), 0 8px 24px rgba(0, 0, 0, 0.35)'
    card.style.setProperty('--sx', (x / rect.width) * 100 + '%')
    card.style.setProperty('--sy', (y / rect.height) * 100 + '%')
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.65s ease, border-color 0.3s ease'
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    card.style.boxShadow = ''
  }

  return (
    <div
      ref={cardRef}
      className={styles.projectCard}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Shine overlay */}
      <div className={styles.cardShine} aria-hidden="true" />

      {/* Header */}
      <div className={styles.projectCardHeader}>
        <div>
          <h3 className={styles.projectCardTitle}>{title}</h3>
          {company ? (
            <div className={styles.projectCardMeta}>{company}</div>
          ) : null}
        </div>
        <div className={styles.projectCardIcon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
            <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </div>
      </div>

      {/* Problem / Solution */}
      <p className={styles.projectCardText}>
        <strong>Contexte :</strong> {problem}
      </p>
      <p className={styles.projectCardText}>
        <strong>Réponse :</strong> {solution}
      </p>

      {/* Tech badges */}
      <div className={styles.techBadges}>
        {techStack.map((t, i) => (
          <span key={i} className={styles.techBadge}>{t}</span>
        ))}
      </div>

      {/* Mockup preview */}
      <div className={styles.mockupBox}>
        <div className={styles.mockupHeader}>
          <span className={styles.mockupHeaderLeft}>Aperçu produit</span>
          <span className={styles.mockupHeaderRight}>Interface optimisée</span>
        </div>
        <div className={styles.mockupContent}>
          <div className={styles.mockupLeft}>
            <div className={styles.mockupDot} />
            <svg className={styles.mockupLine} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 35 C40 35 50 5 100 10 C150 15 160 20 200 8" stroke="#192bc2" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className={styles.mockupRight} />
        </div>
      </div>

      {/* Footer */}
      <div className={styles.projectCardFooter}>
        <Link href={`/projects/${slug}`} className={styles.footerBtn}>
          {ctaLabel}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </Link>
        <span className={styles.hoverHint}>Survolez pour explorer</span>
      </div>
    </div>
  )
}
