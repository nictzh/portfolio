import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout/CaseStudyLayout";
import CaseImage from "@/components/CaseImage/CaseImage";

export const metadata: Metadata = {
  title: "L3 Home — UX/UI Case Study — Nick Toh",
  description:
    "Case study: L3 Home — Revisited. UX research and UI redesign for a Melbourne furniture brand's e-commerce experience.",
};

export default function L3HomeUx() {
  return (
    <CaseStudyLayout
      kicker="UX / UI Case Study"
      title="L3 Home — Revisited"
      meta={[
        { label: "Role", value: "UX Researcher, UX/UI Designer, User Testing" },
        { label: "Timeframe", value: "6 weeks" },
        { label: "Tools", value: "Figma, Illustrator, Miro, Trello, Google Forms, Zoom" },
        { label: "Mentors", value: "Lily Kane & Ryan Martin, Zendesk (Academy Xi)" },
      ]}
      heroImage={{
        src: "/images/l3home-ux/hero.jpg",
        alt: "L3 Home — Revisited",
      }}
      prevLink={{ href: "/", label: "← Back to Work" }}
      nextLink={{ href: "#", label: "Next Project »" }}
    >
      <section className="caseSection">
        <span className="caseLabel">Discover</span>
        <div className="caseBody">
          <p>
            To improve L3 Home&apos;s customer experience on the website while
            shopping for furniture online, making the process of purchasing a
            high-ticketed product such as furniture easier for visitors.
          </p>
          <p>We adopted the Double Diamond process throughout the journey of this exercise.</p>
          <div className="caseImgRow single">
            <CaseImage src="/images/l3home-ux/discover-1.png" alt="Design Thinking / Double Diamond process" />
          </div>
          <h3>Client Background</h3>
          <p>
            L3 Home is a family-owned furniture wholesale/retail brand
            spanning over 30 years of history, carrying a strong passion for
            design and a distinctive selection of furniture intended for
            Australian living at affordable price.
          </p>
          <p>
            As the core of the business shifted to more eCommerce-oriented
            wholesale clients, the company looked to expand into eCommerce to
            reach a new generation of audience. Their last full-fledged retail
            store had already closed in the early 2010s, so this was a fresh
            start.
          </p>
          <p>
            The first iteration of the website launched in February 2020,
            right before COVID-19 impacted Australians&apos; lives. With
            everyone locked in for most of the year, an unexpected demand for
            home improvement — and furniture — followed, and L3 Home generated
            record revenues across both wholesale and online channels.
          </p>
          <h3>Challenge and Objective</h3>
          <p>
            Shopping for furniture online can save time and let customers
            explore options all at once, but it carries concerns. Furniture is
            a bulky item and a larger investment, and most Australians still
            prefer to walk in before purchasing, as furniture is a very
            sensory experience for some.
          </p>
          <p>
            Realising the potential and importance of an e-commerce presence,
            I undertook a UI/UX exercise to further improve the customer&apos;s
            experience while shopping for furniture online.
          </p>
          <h3>Problem Statement</h3>
          <p className="caseQuote">
            Shoppers lack confidence when it comes to buying furniture online.
            They want to know more about the product(s), but often find that
            the information available while shopping online is not enough.
          </p>
          <h3>Research and Analysis</h3>
          <p>
            I began with thorough research on the industry and competitors,
            analysing user experiences on each website to find what worked
            and what didn&apos;t. We also conducted a brand matrix to see
            where L3 Home should position itself — useful for wireframing and
            brand identity later.
          </p>
          <div className="caseImgRow">
            <CaseImage src="/images/l3home-ux/discover-2.png" alt="Competitor Analysis" />
            <CaseImage src="/images/l3home-ux/discover-3.png" alt="Brand Matrix" />
          </div>
          <p>
            We conducted 1-on-1 interviews and online surveys to understand
            the demographic and personal shopping journey better, which
            helped synthesise insights at the defining stage. Google
            Analytics on the existing site reinforced our target audience and
            age group, and market trends research helped back up the
            stakeholder&apos;s position in the market.
          </p>
          <div className="caseImgRow">
            <CaseImage src="/images/l3home-ux/discover-4.png" alt="Google Analytics" />
            <CaseImage src="/images/l3home-ux/discover-5.png" alt="Market Research" />
          </div>
        </div>
      </section>

      <section className="caseSection">
        <span className="caseLabel">Define</span>
        <div className="caseBody">
          <h3>Insights</h3>
          <p>
            Collecting all the pieces of information from research, I built
            an affinity map and later an empathy map to synthesise findings
            into insights that would help define the problem space, using key
            questions raised during research to group them into categories.
          </p>
          <div className="caseImgRow">
            <CaseImage src="/images/l3home-ux/define-1.png" alt="Affinity Map" />
            <CaseImage src="/images/l3home-ux/define-2.png" alt="Empathy Map" />
          </div>
          <h4>Four key insights</h4>
          <div className="caseInsights">
            <div className="caseInsight">
              They like to see, touch and feel the furniture in person before
              committing to purchase, ideally.
            </div>
            <div className="caseInsight">
              They like to know more about the product in detail to
              understand its quality better.
            </div>
            <div className="caseInsight">
              They seek their peers&apos; opinion (IG / reviews / professional
              consultant) for validation of their purchase.
            </div>
            <div className="caseInsight">
              They rely on reviews and hope that would justify their purchase.
            </div>
          </div>
          <p>
            From these insights, we built a primary persona named Brooke — a
            28-year-old working professional — and mapped her customer
            journey, identifying pain points. Brooke faces the most
            challenges from the Consideration to Service stage.
          </p>
          <div className="caseImgRow">
            <CaseImage src="/images/l3home-ux/define-3.png" alt="Persona" />
            <CaseImage src="/images/l3home-ux/define-4.png" alt="Customer Journey" />
          </div>
        </div>
      </section>

      <section className="caseSection">
        <span className="caseLabel">Develop</span>
        <div className="caseBody">
          <p className="caseQuote">
            How might we offer customers a comprehensive experience while
            shopping for furniture online so that they can feel confident and
            well assured during the process?
          </p>
          <h3>Ideation</h3>
          <p>
            We used Crazy 8s and storyboarding to ideate around the How Might
            We question, then filtered the more interesting ideas into a
            Minimum Viable Product matrix to prioritise them.
          </p>
          <div className="caseImgRow triple">
            <CaseImage src="/images/l3home-ux/develop-1.jpg" alt="Crazy 8s" />
            <CaseImage src="/images/l3home-ux/develop-2.jpg" alt="MVP Matrix" />
            <CaseImage src="/images/l3home-ux/develop-3.png" alt="Storyboard" />
          </div>
          <h3>User Flow</h3>
          <p>
            I developed the user flow to show how Brooke would navigate the
            website to reach products and the studio page. While a familiar
            flow for a typical ecommerce site, certain elements needed to be
            present on every page in case the user got stuck and needed
            assistance.
          </p>
          <div className="caseImgRow single">
            <CaseImage src="/images/l3home-ux/develop-4.jpg" alt="User Flow" />
          </div>
          <h3>Lo-fi Wireframe</h3>
          <div className="caseImgRow single">
            <CaseImage src="/images/l3home-ux/develop-5.png" alt="Lo-fi Wireframe" />
          </div>
          <h3>Brand Identity</h3>
          <p>
            We revisited the brand&apos;s visual identity from the existing
            iteration to be more relatable to the persona. Alongside maturing
            the calm, balanced primary teal colour, we added Gishella Morely
            as a heading font to bring more character, complementing the
            existing Josefin Sans.
          </p>
          <div className="caseImgRow">
            <CaseImage src="/images/l3home-ux/develop-6.png" alt="Moodboard" />
            <CaseImage src="/images/l3home-ux/develop-7.png" alt="Colour Palette" />
          </div>
        </div>
      </section>

      <section className="caseSection">
        <span className="caseLabel">Deliver</span>
        <div className="caseBody">
          <p>
            After finalising ideas and revisiting the brand identity, I
            expanded the low-fidelity wireframe into a high-fidelity
            wireframe.
          </p>
          <div className="caseImgRow single">
            <CaseImage src="/images/l3home-ux/deliver-1.png" alt="Hi-fi Wireframe" />
          </div>
          <p>
            I focused on the Product page as the main touchpoint where users
            find out the most about a product, while the Studio page gives
            users a chance to get to know the product and brand better,
            letting them book appointments virtually or on-site.
          </p>
          <div className="caseImgRow quad">
            <CaseImage src="/images/l3home-ux/deliver-2.png" alt="Home Page" />
            <CaseImage src="/images/l3home-ux/deliver-3.png" alt="Product Listing" />
            <CaseImage src="/images/l3home-ux/deliver-4.png" alt="Studio Page" />
            <CaseImage src="/images/l3home-ux/deliver-5.jpg" alt="Mobile" />
          </div>
          <a
            href="https://www.figma.com/proto/hB5LNRKirCIwERkkPKJqRC/L3-Home-Low-Fid-Wireframe"
            className="cvButton"
            style={{ alignSelf: "flex-start" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Prototype
          </a>
        </div>
      </section>

      <section className="caseSection">
        <span className="caseLabel">Usability Testing</span>
        <div className="caseBody">
          <p>
            I constructed two usability scenarios based on the HMW statement —
            mostly task-driven, though left partly open-ended to keep the
            process natural.
          </p>
          <div className="caseImgRow">
            <CaseImage src="/images/l3home-ux/usability-1.png" alt="Scenario 1" />
            <CaseImage src="/images/l3home-ux/usability-2.png" alt="Scenario 2" />
          </div>
          <div className="caseImgRow single">
            <CaseImage src="/images/l3home-ux/usability-3.png" alt="Usability Report" />
          </div>
        </div>
      </section>

      <section className="caseSection">
        <span className="caseLabel">Moving Forward</span>
        <div className="caseBody">
          <h3>Conclusion</h3>
          <p>
            The prototype proved we were heading in the right direction.
            Users were generally impressed — they could feel a sense of
            identity, and a lot of necessary details were there to convince
            them to make a purchase. Even those who didn&apos;t go for swatch
            sampling were happy to book an appointment (virtual or on-site)
            for a first-hand look.
          </p>
          <p>
            There is always room for improvement. The prototype taught us
            that some elements of the visual hierarchy need further study and
            development.
          </p>
          <h3>Next Steps</h3>
          <ul className="caseList">
            <li>Making the product page clearer and shorter — e.g. having a &quot;View More&quot; button.</li>
            <li>
              Revisiting the visual hierarchy of the pages, moving some
              elements to positions users are used to (e.g. Showroom button,
              Reviews section).
            </li>
            <li>Considering integration of AR features in key products.</li>
            <li>Adding cross-selling elements into the listings.</li>
          </ul>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
