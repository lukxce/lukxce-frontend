"use client";

import ClientsLogosCarousel from "./components/ClientsLogosCarousel";
import ContactForm from "./components/ContactForm";
import CtaWithImageBackground from "./components/CtaWithImageBackground";
import DesignJourneyTable from "./components/DesignJourneyTable";
import Faq from "./components/Faq";
import JournalList from "./components/JournalList";
import LinkCard from "./components/LinkCard";
import MotionTitleBlock from "./components/MotionTitleBlock";
import PhoneInHand from "./components/PhoneInHand";
import PricingPlans from "./components/PricingPlans";
import ScrollReveal from "./components/ScrollReveal";
import ServiceItem from "./components/ServiceItem";
import StepProcess from "./components/StepProcess";
import Subscribe from "./components/Subscribe";
import {
  IconBrand,
  IconMotion,
  IconProduct,
  IconStrategy,
  IconWeb,
} from "./components/serviceIcons";
import ToolsList from "./components/ToolsList";
import Years from "./components/Years";
import styles from "./page.module.css";
import HeroCard from "./components/HeroCard";
import AvatarInfo from "./components/AvatarInfo";

const services = [
  {
    key: "product",
    title: "Product design",
    description:
      "End-to-end flows, prototypes, and UI systems so your product feels clear, fast, and trustworthy from first use to power features.",
    Icon: IconProduct,
  },
  {
    key: "brand",
    title: "Brand & identity",
    description:
      "Visual language, typography, and art direction that tell a consistent story across web, print, and social touchpoints.",
    Icon: IconBrand,
  },
  {
    key: "web",
    title: "Web experiences",
    description:
      "Marketing sites and product surfaces built with performance, accessibility, and responsive layouts in mind.",
    Icon: IconWeb,
  },
  {
    key: "motion",
    title: "Motion & interaction",
    description:
      "Micro-interactions and motion specs that guide attention, explain hierarchy, and make interfaces feel alive without noise.",
    Icon: IconMotion,
  },
  {
    key: "strategy",
    title: "Design strategy",
    description:
      "Workshops, audits, and roadmaps that align stakeholders on priorities before pixels, so execution stays focused.",
    Icon: IconStrategy,
  },
];

export default function HomePage({ articles = [], showcases = [] }) {
  return (
    <div className={styles.page}>
      <main className={styles.main} data-article-count={articles.length}>
        <HeroCard />

        <section id="about">
          <MotionTitleBlock
            title="Startups, from every angle."
            subtitle="I've spent my career around startups, from just about every angle. At Startit I worked with founders building their first companies. At Native Teams I was employee #6 and helped scale it to €40M ARR as Head of Marketing. I've consulted for early-stage teams like Hive5, advised on Serbia's Digital EU Agenda, and today I lead marketing at Hypefy. Different seats, same question: how early-stage companies actually find growth."
            className={styles.titleContainer}
            width={550}
            subtitleWidth={550}
            subtitleWidthMobile={350}
          />
        </section>

        {/* --- Commented-out sections (clients, showcases, services, tools) ---
        <MotionTitleBlock
          title="Case studies"
          subtitle="Projects and results from inside the companies I've worked at."
          subtitleWidthMobile={200}
          className={styles.titleContainer}
          marginTop={10}
        />

        <div className={styles.cardColumn}>
          {showcases.map((card) => (
            <LinkCard
              key={card.id ?? card.title}
              href={card.href}
              backgroundSrc={card.backgroundSrc}
              backgroundAlt={card.backgroundAlt}
              thumbSrc={card.thumbSrc}
              thumbAlt={card.thumbAlt}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
        <ScrollReveal>
          <ClientsLogosCarousel title="Trusted by:" />
        </ScrollReveal>

        <MotionTitleBlock
          title="What we do"
          subtitle="The core marketing services we handle for our clients."
          className={styles.titleContainer}
          widthMobile={200}
        />

        <div className={styles.servicesList}>
          {services.map(({ key, title, description, Icon }, index) => (
            <ScrollReveal key={key} delay={index * 0.08}>
              <ServiceItem
                icon={<Icon />}
                title={title}
                description={description}
                initialOpen={index === 0}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <StepProcess />
        </ScrollReveal>

        <MotionTitleBlock
          title="My toolkit, your advantage"
          subtitle="See how my expertise with these tools drives better results."
          className={styles.titleContainer}
        />

        <ScrollReveal>
          <ToolsList />
        </ScrollReveal>
        --- End commented-out sections --- */}

        <ScrollReveal>
          <Years />
          <div className={styles.journeyContainer}>
            <h2 className={styles.journeyTitleTitle}>My journey through marketing</h2>
            <p className={styles.journeyTitleSubtitle}>
              The roles and companies that shaped how I think about growth,
              year by year.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <DesignJourneyTable />
        </ScrollReveal>

        {/* --- Commented-out sections (testimonials, pricing, FAQ, CTA) ---
        <MotionTitleBlock
          title="Trusted by our clients"
          subtitle="<b>What clients say</b> <br> about working with us."
          hasImage={true}
          className={styles.titleContainer}
        />

        <PhoneInHand />

        <MotionTitleBlock
          title="Flexible plans for every need"
          subtitle="Whether you’re starting fresh or need a complete overhaul, choose the plan that fits your project."
          width={425}
          subtitleWidth={350}
          widthMobile={300}
          subtitleWidthMobile={350}
          className={styles.titleContainer}
        />

        <ScrollReveal>
          <PricingPlans />
        </ScrollReveal>

        <div id="faq">
          <ScrollReveal>
            <Faq />
          </ScrollReveal>
        </div>

        <CtaWithImageBackground />
        --- End commented-out sections --- */}

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

        <MotionTitleBlock
          title="Marketing insights from inside"
          subtitle="Marketing lessons from inside early-stage startups, a few times a month. Unsubscribe anytime."
          width={600}
          subtitleWidth={425}
          subtitleWidthMobile={350}
          className={styles.titleContainer}
        />

        {/* <ScrollReveal>
          <ClientsLogosCarousel marginTop={60} marginBottom={60} />
        </ScrollReveal> */}

        <ScrollReveal>
          <Subscribe />
        </ScrollReveal>

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
