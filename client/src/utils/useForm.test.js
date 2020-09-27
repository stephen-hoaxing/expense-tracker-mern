import React from "react";
import { useForm } from "./useForm";
import { act, renderHook } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";

it("useForm hook changeText", async () => {
  const { result } = renderHook(useForm);
  result.current[0].text = "";
  const wrapper = render(
    <form data-testid="form">
      <input
        data-testid="text"
        type="text"
        name="text"
        value={result.current[0].text || ""}
        onChange={result.current[1]}
      />
    </form>
  );
  const textInput = await wrapper.findByTestId("text");
  act(() => {
    fireEvent.change(textInput, {
      target: {
        value: "Ads",
      },
    });
  });
  expect(result.current[0].text).toBe("Ads");
});

it("useForm hook changeInput", async () => {
  const submit = () => {
    result.current[0].amount = 0;
  };
  const { result } = renderHook(useForm);
  result.current[0].amount = 0;
  const wrapper = render(
    <form data-testid="form" onSubmit={submit}>
      <input
        data-testid="amount"
        type="number"
        name="amount"
        value={result.current[0].amount || 0}
        onChange={result.current[1]}
      />
    </form>
  );
  const amountInput = await wrapper.findByTestId("amount");
  act(() => {
    fireEvent.change(amountInput, {
      target: {
        value: 2000,
      },
    });
  });
  expect(result.current[0].amount).toBe("2000");
});

it("useForm hook submitForm", async () => {
  const { result } = renderHook(useForm);
  result.current[0].text = "";
  result.current[0].amount = 0;
  const submitForm = () => {
    result.current[0].text = "";
    result.current[0].amount = 0;
  };
  const wrapper = render(
    <form data-testid="form" onSubmit={submitForm}>
      <input
        data-testid="text"
        type="text"
        name="text"
        value={result.current[0].text || ""}
        onChange={result.current[1]}
      />
      <input
        data-testid="amount"
        type="number"
        name="amount"
        value={result.current[0].amount || 0}
        onChange={result.current[1]}
      />
    </form>
  );
  const form = await wrapper.findByTestId("form");
  act(() => {
    fireEvent.submit(form);
  });
  expect(result.current[0].text).toBe("");
});
