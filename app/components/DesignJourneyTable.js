"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  getScrollRevealTransition,
  scrollRevealDistance,
  scrollRevealViewport,
} from "../../lib/scrollReveal";
import dotsSvg from "../assets/dots.svg";
import doubleCheck from "../assets/double-checkmark.svg";
import girlLaptop from "../assets/girl-laptop.png";
import styles from "./DesignJourneyTable.module.css";
import CtaButton from "./CtaButton";

const ROWS = [
  {
    title: "Head of Marketing",
    middle: "Hypefy",
    right: "2024 – Current",
  },
  {
    title: "Head of Marketing (Employee #6)",
    middle: "Native Teams",
    right: "2020 – 2024 · scaled to €40M ARR",
  },
  {
    title: "Advisor to the Minister",
    middle: "Digital EU Agenda",
    right: "2020",
  },
  {
    title: "Marketing",
    middle: "Startit",
    right: "2018 – 2020",
  },
];

const COUNT_INTERVAL_MS = 70;
const PCT_STEP_MS = 12;

function ScrollCountCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(10);
      return;
    }

    let n = 1;
    setCount(1);
    const id = window.setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= 10) {
        window.clearInterval(id);
      }
    }, COUNT_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [isInView]);

  return (
    <div className={styles.statsGroup}>
      <div className={styles.ctaButton}>
        <CtaButton title="Get in touch" action="/#contact" />
      </div>
      <div ref={ref} className={styles.statsCard}>
        <div className={styles.statsLeft}>
          <span className={styles.statsNumber} aria-live="polite">
            {count}
            <sup className={styles.statsPlus}>+</sup>
          </span>
        </div>
        <div className={styles.statsRight}>
          <p className={styles.statsText1}>Years of experience</p>
          <p className={styles.statsText2}>in marketing and growth</p>
        </div>
      </div>
      <TwinSatisfactionRow />
    </div>
  );
}

function TwinSatisfactionRow() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!inView) {
      setPercent(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPercent(95);
      return;
    }

    let n = 0;
    setPercent(0);
    const id = window.setInterval(() => {
      n += 1;
      if (n > 95) {
        window.clearInterval(id);
        return;
      }
      setPercent(n);
    }, PCT_STEP_MS);

    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className={styles.twinRow}>
      <div className={styles.twinLeft}>
        <Image
          src={girlLaptop}
          alt=""
          fill
          className={styles.twinLeftImg}
          sizes="273px"
        />
      </div>
      <div className={styles.twinCheck} aria-hidden>
        <Image src={doubleCheck} alt="" width={40} height={40} unoptimized />
      </div>
      <div className={styles.twinRight}>
        <div className={styles.twinRightTop}>
          <Image
            src={dotsSvg}
            alt=""
            className={styles.twinDots}
            width={260}
            height={54}
            unoptimized
          />
          <p className={styles.pctBlock} aria-live="polite">
            <span className={styles.pctValue}>{percent}</span>
            <span className={styles.pctSymbol}>%</span>
          </p>
        </div>
        <div className={styles.twinRightBottom}>
          <p className={styles.twinP1}>Client satisfaction rate</p>
          <p className={styles.twinP2}>built on trust and results.</p>
        </div>
      </div>
    </div>
  );
}

export default function DesignJourneyTable() {
  return (
    <div className={styles.root}>
      {ROWS.map((row, index) => (
        <motion.div
          key={row.title}
          className={styles.row}
          initial={{ opacity: 0, y: scrollRevealDistance }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollRevealViewport}
          transition={getScrollRevealTransition(index * 0.08)}
        >
          <div className={styles.colLeft}>{row.title}</div>
          <div className={styles.colMid}>{row.middle}</div>
          <div className={styles.colRight}>{row.right}</div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: scrollRevealDistance }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={getScrollRevealTransition(0.16)}
        viewport={scrollRevealViewport}
        className={styles.statsWrap}
      >
        <ScrollCountCard />
      </motion.div>
    </div>
  );
}
