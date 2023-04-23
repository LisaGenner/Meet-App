import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the app is loaded.", () => {
      AppWrapper = mount(<App />);
    });

    when("the user hasn’t specified the number of events.", () => {
      expect(AppWrapper.state("eventCount")).toBe(32);
    });

    then(/^a list of (\d+) events is served to the user.$/, (arg0) => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("a list of events has been served to the user.", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(32);
    });

    const selectedNumber = Math.floor(Math.random() * 32);
    when("the user specifies the number of events to be loaded.", async () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const event = { target: { value: selectedNumber } };
      await NumberOfEventsWrapper.instance().handleInputChanged(event);
    });

    then(
      "a list with the specified number of events is served to the user.",
      () => {
        AppWrapper.update();
        expect(AppWrapper.state("eventCount")).toEqual(selectedNumber);
        expect(AppWrapper.find(".event")).toHaveLength(selectedNumber);
      }
    );
  });
});
