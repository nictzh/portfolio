import type { Metadata } from "next";
import CaseImage from "@/components/CaseImage/CaseImage";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";
import Reveal from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Taubmans — Nick Toh",
  description: "UX case study: Taubmans Paints digital trade and retail experience.",
};

export default function Taubmans() {
  return (
    <CaseStudyLayout
      kicker="UX / UI Case Study"
      title="Taubmans"
      meta={[
        { label: "Role", value: "UX Researcher, UX/UI Designer" },
        { label: "Areas Covered", value: "UX UI Design, UX Workshop, User Testing, Wireframing" },
        { label: "Tools", value: "Figma, Askable, Teams" },
        { label: "UX UI Design Director", value: "Michael Smith" },
      ]}
      heroImage={{ src: "/images/taubmans/hero.png", alt: "Taubmans" }}
      prevLink={{ href: "/work/mitre10", label: "← Mitre 10" }}
      nextLink={{ href: "/work/mmem", label: "MMEM →" }}
    >
      <Reveal className="caseSection reveal">
        <span className="caseLabel">Overview</span>
        <div className="caseBody">
          <h3>Client Background</h3>
          <p>
            Taubmans is a major Australian paint and coatings brand founded in 1897, and is owned by PPG Industries, a
            global coatings company. It offers a wide range of interior and exterior paints, prep products, and
            specialized finishes designed for Australian conditions and it is a household name known for its deep
            legacy and heritage.
          </p>
          <h3>Challenge and Objective</h3>
          <p>
            Taubmans Paints&apos; Australian website was controlled out of the US, where even a minor content change
            took three months, leaving local distributors frustrated and consumers underserved. At the same time,
            trade painters could only place orders by phone or in-store. That put the brand nearly a decade behind
            competitors already offering digital solutions. US-based website was slow, with minor text changes
            taking months, and both trade and B2C customers needed an experience which was on-par with the market
            and at the same time forward trending. It was time for an overhaul.
          </p>
          <h3>Problem Statement</h3>
          <p className="caseQuote">
            Taubmans needed to move at the speed of local trade to keep up with thee local market needs, while
            maintaining the pricing and franchise relationships the business depended on.
          </p>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Discover</span>
        <div className="caseBody">
          <h3>Experience Audit</h3>
          <p>
            Kicking off in the discovery phase, we undertook 2 on-site activities with the stakeholders. We held an
            experience workshop with internal stakeholders, to better understand the current state of the website
            experience, mapping out pain points as well as understanding their user personas better. Preliminary
            data work had already been done by another agency prior to that so that had helped shaped some of the
            framing and strategic framework beforehand.
            <br />
            <br />
            We also conducted an on-site recce at their Bristol Paints store at Clifton Hill, which happens to be
            one of their independent sister branches. From there, we were able to connect the digital challenge in
            a physical environment which how paint is actually ordered and purchased. We were able to speak to the
            store manager to understand in-store behaviours, workflows and their ordering process.
          </p>
          <div className="caseImgRow quad">
            <CaseImage src="/images/taubmans/discover-1.png" alt="Taubmans discovery" />
            <CaseImage src="/images/taubmans/discover-2.png" alt="Taubmans discovery" />
            <CaseImage src="/images/taubmans/discover-3.png" alt="Taubmans discovery" />
            <CaseImage src="/images/taubmans/discover-4.png" alt="Taubmans discovery" />
          </div>
          <h3>Competitive Benchmarking</h3>
          <p>
            Taubmans wasn&apos;t just behind its own potential — it was measurably behind its competitors. Moreover,
            based on the data provided, Dulux had already gained a huge majority of the market share. Benchmarking
            was used to understand the gap better, and to also understand best practices and competitor patterns.
            This was done with a heuristic walkthrough of competitor&apos;s sites, along with a teardown of each key
            pages.
          </p>
          <div className="caseImgRow quad">
            <CaseImage src="/images/taubmans/discover-5.png" alt="Competitive benchmarking" />
            <CaseImage src="/images/taubmans/discover-6.png" alt="Competitive benchmarking" />
            <CaseImage src="/images/taubmans/discover-7.png" alt="Competitive benchmarking" />
            <CaseImage src="/images/taubmans/discover-8.png" alt="Competitive benchmarking" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Define</span>
        <div className="caseBody">
          <h3>Insights</h3>
          <p>Based on the initial findings from the audit, we have gathered the following key insights.</p>
          <div className="caseInsights">
            <div className="caseInsight">
              Users tend to find inspiration online, and often find confidence in brands associated with it.
            </div>
            <div className="caseInsight">
              Users are generally experienced painters, but there is an untapped pool of first time DIY users
            </div>
            <div className="caseInsight">
              Dulux remains top of customers&apos;s mind, due to the amount of content it curates from its website.
            </div>
            <div className="caseInsight">DIY users want support that helps them feel confident.</div>
          </div>
          <p>With these insights, we were then able to build upon the proto persona initially provided from the data.</p>
          <div className="caseImgRow single">
            <CaseImage src="/images/taubmans/define-1.png" alt="Persona" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Develop</span>
        <div className="caseBody">
          <p className="caseQuote">Placeholder How Might We statement.</p>
          <h3>Ideation and Low Fidelity Wireframing</h3>
          <p>
            Using ideas and recommendations gathered from insights and data captured from the previous phase, we
            synthesised the concept by building a wireframe around it.
            <br />
            <br />
            We had built a low fidelity wireframe on Figma around the user&apos;s core shopping journey and
            emphasise better product and colour discoverability, while also branching out to key features we wanted
            to test out. Some notable features we included were a product quiz, sample ordering, as well as using
            QR code to save colour codes.
          </p>
          <div className="caseImgRow single">
            <CaseImage src="/images/taubmans/develop-3.png" alt="Wireframe" />
          </div>
          <div className="caseImgRow">
            <CaseImage src="/images/taubmans/develop-4.png" alt="Wireframe" />
            <CaseImage src="/images/taubmans/develop-4b.png" alt="Wireframe" />
          </div>
          <h3>User Testing</h3>
          <p>
            Using Askable, we conducted user testing with a pool of random participants. The results were positive
            overall, with some further insights revealed along the way.
          </p>
          <div className="caseImgRow single">
            <CaseImage src="/images/taubmans/develop-5.png" alt="User testing" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Deliver</span>
        <div className="caseBody" style={{ maxWidth: "100%" }}>
          <h3>Hi-Fidelity Design</h3>
          <p>
            Based on the initial round of feedback from the stakeholders and user testing participants, we had made
            some slight adjustments to the wireframe before building out the high fidelity design. This was
            supported by the Taubman&apos;s existing brand guidelines.
          </p>
          <div className="taubmansDeliverBento">
            <div className="taubmansDeliverBento__row taubmansDeliverBento__row--top">
              <div><CaseImage src="/images/taubmans/deliver-1.png" alt="Hi-fi design" /></div>
              <div><CaseImage src="/images/taubmans/deliver-2.png" alt="Hi-fi design" /></div>
              <div><CaseImage src="/images/taubmans/deliver-3.png" alt="Hi-fi design" /></div>
            </div>
            <div className="taubmansDeliverBento__row taubmansDeliverBento__row--bottom">
              <div><CaseImage src="/images/taubmans/deliver-4.png" alt="Hi-fi design" /></div>
              <div><CaseImage src="/images/taubmans/deliver-5.png" alt="Hi-fi design" /></div>
            </div>
          </div>
          <h3>Handover</h3>
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24 }}>
            <p>
              A retroactive service blueprint for the stakeholders and development team was included as part of the
              handover. This includes the features list as well as the final user journey and information
              architecture. A style guide was also created for the developers and the brand content team for future
              reference.
              <br />
            </p>
            <div className="caseImgRow">
              <CaseImage src="/images/taubmans/handover-1.png" alt="Handover" />
              <CaseImage src="/images/taubmans/handover-2.png" alt="Handover" />
            </div>
            <div className="caseImgRow single">
              <CaseImage src="/images/taubmans/handover-3.png" alt="Handover" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Moving Forward</span>
        <div className="caseBody">
          <h3>Conclusion</h3>
          <p>
            An entirely new web experience for B2C customers, along with a trade app as part of a wider digital
            experience was created as part of our UX process. Taubmans now has a flexible, locally managed platform,
            a customer centric digital experience, and a structural foundation which can be used for future scaling.
          </p>
          <h3>Results</h3>
          <p>As a result of this new digital experience, Taubmans is now able to have:</p>
          <ul className="caseList">
            <li><div>30,000 plus spec ready, searchable colour pages</div></li>
            <li><div>Months to minutes content updates</div></li>
            <li><div>3 disjointed experiences unified into 1 purpose-built platform</div></li>
          </ul>
        </div>
      </Reveal>
    </CaseStudyLayout>
  );
}
