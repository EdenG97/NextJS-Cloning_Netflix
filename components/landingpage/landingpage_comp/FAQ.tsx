import EmailGetStarted from "../../ui/EmailGetStarted";
import classes from "./FAQ.module.css";
import FAQFirstList from "./faq_comp/FAQFirstList";
import FAQSecondList from "./faq_comp/FAQSecondList";
import FAQThirdList from "./faq_comp/FAQThirdList";
import FAQFourthList from "./faq_comp/FAQFourthList";
import FAQFifthList from "./faq_comp/FAQFifthList";
import FAQSixthList from "./faq_comp/FAQSixthList";

const FAQ = (): JSX.Element  => {
  return (
    <>
      <section className={classes["faq-container"]}>
        <div className={classes["faq-wrapper"]}>
          <h1>Frequently Asked Questions</h1>
          <ul>
            <FAQFirstList />
            <FAQSecondList />
            <FAQThirdList />
            <FAQFourthList />
            <FAQFifthList />
            <FAQSixthList />
          </ul>
          <EmailGetStarted />
        </div>
      </section>
    </>
  );
};

export default FAQ;
