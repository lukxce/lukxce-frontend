"use client";

import ContactForm from "./components/ContactForm";
import DesignJourneyTable from "./components/DesignJourneyTable";
import JournalList from "./components/JournalList";
import MotionTitleBlock from "./components/MotionTitleBlock";
import ScrollReveal from "./components/ScrollReveal";
import Subscribe from "./components/Subscribe";
import Years from "./components/Years";
import styles from "./page.module.css";
import HeroCard from "./components/HeroCard";
import AvatarInfo from "./components/AvatarInfo";

export default function HomePage({ articles = [], showcases = [] }) {
  return (
    <div className={styles.page}>
      <main className={styles.main} data-article-count={articles.length}>
        <HeroCard />

        <section id="about" className={styles.aboutSection}>
          <MotionTitleBlock
            title="Startups, from every angle."
            subtitle="I've spent my career around startups, from just about every angle. At Startit I worked with founders building their first companies. At Native Teams I was employee #6 and helped scale it to €40M ARR as Head of Marketing. I've consulted for early-stage teams like Hive5, advised on Serbia's Digital EU Agenda, and today I lead marketing at Hypefy."
            className={styles.titleContainer}
            width={550}
            subtitleWidth={500}
            subtitleWidthMobile={350}
          />
          <ScrollReveal>
            <p className={styles.aboutPunchline}>
              Different seats, same question: how early-stage companies actually
              find growth.
            </p>
          </ScrollReveal>
        </section>

        <section className={styles.journeySection}>
          <ScrollReveal>
            <Years />
            <div className={styles.journeyContainer}>
              <h2 className={styles.journeyTitleTitle}>
                My journey through marketing
              </h2>
              <p className={styles.journeyTitleSubtitle}>
                The roles and companies that shaped how I think about growth,
                year by year.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <DesignJourneyTable />
          </ScrollReveal>
        </section>

        <section className={styles.articlesSection}>
          <MotionTitleBlock
            width={500}
            title="Building marketing from zero"
            subtitle="Paid, growth, and the real work of building a marketing team."
            subtitleWidth={400}
            subtitleWidthMobile={300}
            className={styles.titleContainer}
          />

          <JournalList
            items={articles.map((a) => ({
              slug: a.slug,
              title: a.title,
              publishedAt: a.publishedAt,
              imageUrl: a.coverUrl,
            }))}
          />
        </section>

        <section className={styles.subscribeSection}>
          <MotionTitleBlock
            title="Marketing insights from inside"
            subtitle="Marketing lessons from inside early-stage startups, a few times a month. Unsubscribe anytime."
            width={600}
            subtitleWidth={425}
            subtitleWidthMobile={350}
            className={styles.titleContainer}
          />

          <ScrollReveal>
            <Subscribe />
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
