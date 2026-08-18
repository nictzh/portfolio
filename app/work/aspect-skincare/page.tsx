import type { Metadata } from "next";
import CaseImage from "@/components/CaseImage/CaseImage";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";
import Reveal from "@/components/Reveal/RevealSection";

export const metadata: Metadata = {
  title: "Aspect Skincare — Nick Toh",
  description: "UX case study for a skincare label brand identity and packaging.",
};

export default function AspectSkincare() {
  return (
    <CaseStudyLayout
      kicker="UX / UI Case Study"
      title="Aspect Skincare"
      meta={[
        { label: "Role", value: "UX Researcher, UX/UI Designer" },
        { label: "Timeframe", value: "Placeholder" },
        { label: "Tools", value: "Figma, Miro" },
        { label: "Mentors", value: "Placeholder" },
      ]}
      heroImage={{ src: "/images/aspect-skincare/hero.jpg", alt: "Aspect Skincare" }}
      prevLink={{ href: "/work/mmem", label: "← MMEM" }}
      nextLink={{ href: "/work/mirvac", label: "Mirvac →" }}
    >
      <Reveal className="caseSection reveal">
        <span className="caseLabel">Overview</span>
        <div className="caseBody">
          <p>Placeholder — a UX case study for a skincare label brand identity and packaging.</p>
          <p>We adopted the Double Diamond process throughout the journey of this exercise.</p>
          <div className="caseImgRow single">
            <CaseImage src="/images/aspect-skincare/overview-1.jpg" alt="Overview" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Discover</span>
        <div className="caseBody">
          <h3>Client Background</h3>
          <p>Placeholder — client background and context go here.</p>
          <h3>Challenge and Objective</h3>
          <p>Placeholder — the challenge and objective behind the project go here.</p>
          <h3>Problem Statement</h3>
          <p className="caseQuote">Placeholder problem statement.</p>
          <h3>Research and Analysis</h3>
          <p>Placeholder — research and analysis findings go here.</p>
          <div className="caseImgRow">
            <CaseImage src="/images/aspect-skincare/discover-1.jpg" alt="Research" />
            <CaseImage src="/images/aspect-skincare/discover-2.jpg" alt="Research" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Define</span>
        <div className="caseBody">
          <h3>Insights</h3>
          <p>Placeholder — key insights synthesised from research go here.</p>
          <div className="caseInsights">
            <div className="caseInsight">Placeholder insight one.</div>
            <div className="caseInsight">Placeholder insight two.</div>
            <div className="caseInsight">Placeholder insight three.</div>
            <div className="caseInsight">Placeholder insight four.</div>
          </div>
          <p>Placeholder — persona and journey mapping go here.</p>
          <div className="caseImgRow">
            <CaseImage src="/images/aspect-skincare/define-1.jpg" alt="Persona" />
            <CaseImage src="/images/aspect-skincare/define-2.jpg" alt="Persona" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Develop</span>
        <div className="caseBody">
          <p className="caseQuote">Placeholder How Might We statement.</p>
          <h3>Ideation</h3>
          <p>Placeholder — ideation process goes here.</p>
          <div className="caseImgRow triple">
            <CaseImage src="/images/aspect-skincare/develop-1.jpg" alt="Ideation" />
            <CaseImage src="/images/aspect-skincare/develop-2.jpg" alt="Ideation" />
            <CaseImage src="/images/aspect-skincare/develop-3.jpg" alt="Ideation" />
          </div>
          <h3>User Flow</h3>
          <p>Placeholder — user flow description goes here.</p>
          <div className="caseImgRow single">
            <CaseImage src="/images/aspect-skincare/develop-4.jpg" alt="User flow" />
          </div>
          <h3>Lo-fi Wireframe</h3>
          <div className="caseImgRow single">
            <CaseImage src="/images/aspect-skincare/develop-5.jpg" alt="Wireframe" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Deliver</span>
        <div className="caseBody">
          <p>Placeholder — high-fidelity design and delivery details go here.</p>
          <div className="caseImgRow triple">
            <CaseImage src="/images/aspect-skincare/deliver-1.jpg" alt="Hi-fi design" />
            <CaseImage src="/images/aspect-skincare/deliver-2.jpg" alt="Hi-fi design" />
            <CaseImage src="/images/aspect-skincare/deliver-3.jpg" alt="Hi-fi design" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Usability Testing</span>
        <div className="caseBody">
          <p>Placeholder — usability testing approach and findings go here.</p>
          <div className="caseImgRow single">
            <CaseImage src="/images/aspect-skincare/testing-1.jpg" alt="Usability testing" />
          </div>
        </div>
      </Reveal>

      <Reveal className="caseSection reveal">
        <span className="caseLabel">Moving Forward</span>
        <div className="caseBody">
          <h3>Conclusion</h3>
          <p>Placeholder — conclusion goes here.</p>
          <h3>Next Steps</h3>
          <ul className="caseList">
            <li>Placeholder next step one.</li>
            <li>Placeholder next step two.</li>
          </ul>
        </div>
      </Reveal>
    </CaseStudyLayout>
  );
}
