import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");
defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("the app is loaded.", () => {
      AppWrapper = mount(<App />);
    });

    when("a list of events has been served to the user.", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(32);
    });

    then("the event details are not visible to the user.", () => {
      expect(AppWrapper.find(".details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the list of events is loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on the “Show details” button of the event.", () => {
      AppWrapper.update();
      AppWrapper.find(".detailsButton").at(0).simulate("click");
    });

    then("the event is expanded to show details", () => {
      expect(AppWrapper.find(".details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("an event has been expanded to show details.", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".detailsButton").at(0).simulate("click");
    });

    when("the user clicks on the “Hide details” button of the event.", () => {
      AppWrapper.update();
      AppWrapper.find(".detailsButton").at(0).simulate("click");
    });

    then("the details of the event are hidden.", () => {
      expect(AppWrapper.find(".details")).toHaveLength(0);
    });
  });
});
