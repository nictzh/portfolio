import type { Metadata } from "next";
import CaseImage from "@/components/CaseImage/CaseImage";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";
import Reveal from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Mitre 10 — Nick Toh",
  description: "UX case study for a national hardware chain.",
};

export default function Mitre10() {
  return (
    <CaseStudyLayout
      kicker="UX / UI Case Study"
      title="Mitre 10"
      meta={[
        { label: "Role", value: "UX Researcher, UX/UI Designer" },
        { label: "Areas Covered", value: "Competitive Benchmarking, Wireframe Prototyping, Hi-Fidelity Design" },
        { label: "Tools", value: "Adobe XD, Figma, Miro" },
        { label: "UX UI Design Director", value: "Michael Smith" },
      ]}
      heroImage={{ src: "/images/mitre10/hero.png", alt: "Mitre 10" }}
      prevLink={{ href: "/", label: "← Back to Work" }}
      nextLink={{ href: "/work/taubmans", label: "Taubmans →" }}
    >
      <Reveal className="caseSection reveal">
        <span className="caseLabel">Discover</span>
        <div className="caseBody">
          <h3>Client Background</h3>
          <p>
            Mitre 10 is one of Australia&apos;s largest home improvement and hardware retailers. It operates a
            network of independently owned and operated stores across the country, known for combining local,
            community-based service with the buying power of a national brand.
          </p>
          <h3>Challenge and Objective</h3>
          <p>
            The business wanted to move away from its long-standing reliance on printed catalogues, and put that
            value into its digital assets instead.
            <br />
            <br />
            The brief had asked us to re-evaluate the Mitre 10 online experience, along with the site&apos;s
            information architecture to improve its structure and content hierarchy while keeping the experience
            customer-first.
          </p>
          <h3>Problem Statement</h3>
          <p className="caseQuote">
            Mitre 10&apos;s online experience wasn&apos;t flexible enough to serve customers and commercial partners
            at the same time.
          </p>
          <h3>User Experience Audit</h3>
          <p>
            We ran a UX audit of the existing user journey to ground the project in first-hand evidence rather than
            assumptions, walking through the existing site against core usability heuristics — clarity of hierarchy,
            navigation logic, visual contrast, and content findability — to validate and discover potentially new
            pain points raised in the brief.
            <br />
            <br />
            A feature list was also worked out by the solution architect team, mapped out based on each journey to
            ensure the scope and requirements are met. It gave the team a concrete, evidence-based starting point to
            test findings against in the benchmarking stage that followed.
          </p>
          <div className="caseImgRow single">
            <CaseImage src="/images/mitre10/discover-4.png" alt="Research approach" />
          </div>
          <h3>Competitive Benchmarking</h3>
          <p>
            As a lean UX engagement, our research was grounded in the client brief and a structured benchmarking
            exercise against competitor and category-leading hardware/retail sites. While home page was primarily
            the focus on this exercise, we also did benchmarking on key touchpoints of the core user journey.
            Evidently, Bunnings was often mentioned as the clear main competitor, but we also included close
            competitors such as Sydney Tools to avoid a bias assumption of best practice in the market.
          </p>
          <div className="caseImgFull">
            <CaseImage src="/images/mitre10/discover-3.png" alt="Competitive benchmarking" />
          </div>
          <div className="caseImgRow">
            <CaseImage src="/images/mitre10/discover-1.png" alt="Competitive benchmarking" />
            <CaseImage src="/images/mitre10/discover-2.png" alt="Competitive benchmarking" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Define</span>
        <div className="caseBody">
          <h3>Insights</h3>
          <p>Benchmarking translated into a small set of guiding insights that shaped the design direction.</p>
          <div className="caseInsights">
            <div className="caseInsight">
              The homepage needed a tiered content structure — not just one hero slot — to give partners meaningful,
              valuable marketing placements.
            </div>
            <div className="caseInsight">
              Product searchability needs to be at the forefront of the user experience. Organic content like
              articles also needs to be surfaced better.
            </div>
            <div className="caseInsight">
              The site&apos;s visual system needed more contrast and bold to reflect its new brand direction so
              content could stand out rather than blend into the brand blue.
            </div>
            <div className="caseInsight">
              Navigation and utility elements (login, wishlist, cart, search) needed a clearer, more deliberate
              structure.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Develop</span>
        <div className="caseBody">
          <h3>Lo-fidelity Wireframe</h3>
          <p>
            With insights defined, we moved directly into low-fidelity wireframing rather than a separate ideation
            phase — appropriate for a lean process with a tightly scoped brief. Wireframes explored a modular
            homepage structure as a base for other pages in the core journey.
          </p>
          <div className="caseImgRow single">
            <CaseImage src="/images/mitre10/develop-5.png" alt="Wireframe" />
          </div>
          <h3>Stakeholder Testing</h3>
          <p>
            Validation for this project was carried out through rounds of stakeholder review — checking design
            decisions against the benchmarking goals set out in Discover, and iterating the high-fidelity design
            based on that feedback.
          </p>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Deliver</span>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <h3>Hi-Fidelity Design</h3>
          <p>
            In the high fidelity design, we refined the visual system to integrate the new brand guidelines as well
            as addressing the contrast and brand-colour issues raised in benchmarking.
          </p>
          <div className="caseDeliverBento">
            <div className="caseDeliverRow caseDeliverRow--top">
              <div><CaseImage src="/images/mitre10/deliver-1.png" alt="Hi-fi design" /></div>
              <div><CaseImage src="/images/mitre10/deliver-2.png" alt="Hi-fi design" /></div>
              <div><CaseImage src="/images/mitre10/deliver-3.png" alt="Hi-fi design" /></div>
            </div>
            <div className="caseDeliverRow caseDeliverRow--bottom">
              <div><CaseImage src="/images/mitre10/deliver-4.png" alt="Hi-fi design" /></div>
              <div><CaseImage src="/images/mitre10/deliver-5.png" alt="Hi-fi design" /></div>
            </div>
          </div>
          <h3>Style Guide Handover</h3>
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24 }}>
            <p>
              As the primary handover deliverable, we produced a style guide documenting the updated elements,
              giving the internal team a consistent reference for building and maintaining the new homepage
              template going forward. We also included a comprehensive guide for managing modular content
              components, providing a visual hierarchy guide to ensure the experience remains cohesive and
              balanced.
            </p>
            <div className="caseImgRow single">
              <CaseImage src="/images/mitre10/handover-1.png" alt="Handover" />
            </div>
            <div className="caseImgRow single">
              <CaseImage src="/images/mitre10/handover-2.png" alt="Handover" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Moving Forward</span>
        <div className="caseBody">
          <h3>Conclusion</h3>
          <p>
            The redesigned homepage template gave Mitre 10 a more flexible, tiered content structure to support
            partners, alongside a clearer, higher-contrast visual system and more prominent service information for
            customers. The modular content system was then extended to complete the rest of the key templates (e.g.
            category and product pages), as well as adapting it to their sister brand, Home Hardware.
          </p>
          <h3>Success Metrics</h3>
          <p>
            This homepage redesign was part of Mitre 10&apos;s wider digital transformation — including a full
            platform migration to Adobe Commerce, nationwide fulfilment rollout, and consolidated brand experiences.
            Mitre 10 has since seen strong platform-wide performance gains, including.
          </p>
          <ul className="caseList">
            <li><strong>315%</strong> increase in transactions</li>
            <li><strong>234%</strong> increase in revenue</li>
            <li><strong>6%</strong> increase in eCommerce conversion rate</li>
          </ul>
          <p>
            Mitre 10 continues to work with Balance/Digitas to this day, with an ongoing partnership focused on
            evolving their digital experience and identifying new areas for improvement.
          </p>
        </div>
      </Reveal>
    </CaseStudyLayout>
  );
}
