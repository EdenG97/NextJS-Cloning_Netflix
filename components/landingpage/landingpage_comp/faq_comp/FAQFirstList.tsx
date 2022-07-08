import FAQLists from "../../../ui/FAQLists";

const FAQFirstList = (): JSX.Element  => {
  return (
    <FAQLists
      direction
      question="What is Netflix?"
      firstParagraph="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
      secondParagraph="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    />
  );
};

export default FAQFirstList;
