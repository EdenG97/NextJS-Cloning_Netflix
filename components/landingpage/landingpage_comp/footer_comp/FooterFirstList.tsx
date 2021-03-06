import FooterLists from "../../../ui/FooterLists";

const FooterFirstList = (): JSX.Element  => {
  return (
    <FooterLists
      view
      firstList="FAQ"
      secondList="Investor Relations"
      thirdList="Ways to Watch"
      fourthList="Corporate Information"
      fifthList="Only on Netflix"
    />
  );
};

export default FooterFirstList;
