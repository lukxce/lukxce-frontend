"use client";

import ContactForm from "./components/ContactForm";
import DesignJourneyTable from "./components/DesignJourneyTable";
import MotionTitleBlock from "./components/MotionTitleBlock";
import ScrollReveal from "./components/ScrollReveal";
import Years from "./components/Years";
import styles from "./page.module.css";
import HeroCard from "./components/HeroCard";
import AvatarInfo from "./components/AvatarInfo";

const WORK_CARDS = [
  {
    meta: "Hypefy · 2026",
    title: "The CEE Influencer Benchmark Report",
    bigFact: "22,571 posts · 1,343 campaigns",
    body: "The first influencer pricing benchmark built on closed deals instead of surveys. 20 markets, and every price one a brand agreed to and paid. I run the marketing behind it, and the thesis is simple: creators know the going rates, brands don't, and publishing the numbers fixes that.",
    linkLabel: "Read the report →",
    linkHref: "https://go.hypefy.ai/cee-influencer-benchmark",
    external: true,
  },
  {
    meta: "Native Teams · 2021 to 2026",
    title: "Employee #6 to €40M ARR",
    bigFact: "4 promotions",
    body: "Joined as a marketing manager in year one, left as Head of Marketing Strategy. Built demand generation end to end while the company grew from a regional startup into a global work payments platform: paid, SEO, funnels, lifecycle, new market launches, and eventually the strategy function itself. Startups don't hand you a playbook. You write it, break it, and rewrite it.",
    linkLabel: "The full story →",
    linkHref: "https://linkedin.com/in/lukajovanovic",
    external: true,
  },
  {
    meta: "Hypefy · 2026 to now",
    title: "Marketing for an AI platform",
    bigFact: "40+ markets · 700M+ impressions",
    body: "Head of Marketing at the AI platform that plans, matches, and executes influencer campaigns for brands like NIVEA, PepsiCo, Samsung and McDonald's. My favorite part of the job is publishing what everyone else keeps in a drawer.",
    linkLabel: "What we publish →",
    linkHref: "/journal",
    external: false,
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroCard />

        {/* ── Work ── */}
        <section id="work" className={styles.workSection}>
          <ScrollReveal>
            <div className={styles.workHeader}>
              <h2 className={styles.workTitle}>Work</h2>
              <p className={styles.workIntro}>
                Things that exist because I built them or helped build them. No
                &ldquo;increased brand awareness by 40%&rdquo; slides. Real
                artifacts, real numbers.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.workGrid}>
            {WORK_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className={styles.workCard}>
                  <span className={styles.workCardMeta}>{card.meta}</span>
                  <h3 className={styles.workCardTitle}>{card.title}</h3>
                  <p className={styles.workCardFact}>{card.bigFact}</p>
                  <p className={styles.workCardBody}>{card.body}</p>
                  <a
                    href={card.linkHref}
                    className={styles.workCardLink}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {card.linkLabel}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <MotionTitleBlock
            title="Startups, from every angle."
            subtitle="I've spent my career around startups from just about every angle. At Startit I worked with founders building their first companies. At Native Teams I was employee #6 and helped scale it to €40M ARR, joining as a marketing manager and leaving as Head of Marketing Strategy. I've consulted for early stage teams, advised on Serbia's Digital EU Agenda, and today I lead marketing at Hypefy."
            className={styles.titleContainer}
            width={550}
            subtitleWidth={500}
            subtitleWidthMobile={350}
          />
          <ScrollReveal>
            <p className={styles.aboutPunchline}>
              Different seats, same question: how early stage companies actually
              find growth.
            </p>
          </ScrollReveal>
        </section>

        <section className={styles.journeySection}>
          <ScrollReveal>
            <Years />
            <div className={styles.journeyContainer}>
              <h2 className={styles.journeyTitleTitle}>
                The roles that shaped how I think
              </h2>
              <p className={styles.journeyTitleSubtitle}>
                Every seat taught a different part of the growth question.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <DesignJourneyTable />
          </ScrollReveal>
        </section>

        <ScrollReveal>
          <AvatarInfo />
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
    </div>
  );
}
