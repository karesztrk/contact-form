import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { FormEvent, useEffect, useRef } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Contact form" },
    { name: "description", content: "This is a contact form" },
  ];
};
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const description = formData.get("description");

  const errors = {
    name: name ? null : "Name is required",
    email: email ? null : "Email is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json(errors);
  }

  console.log({ name, email, description });
  return redirect("/");
};

export default function Index() {
  const errors = useActionData<typeof action>();
  const navigation = useNavigation();
  const submit = useSubmit();

  const isSubmitting = Boolean(navigation.state === "submitting");

  let formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    submit(event.currentTarget);
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Contact form</h1>
      <Form ref={formRef} method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your name</label>:{" "}
          <input id="name" type="text" name="name" />
          {errors?.name ? <em>{errors.name}</em> : null}
        </div>
        <div>
          <label htmlFor="email">Your email address</label>:{" "}
          <input id="email" type="email" name="email" />
          {errors?.email ? <em>{errors.email}</em> : null}
        </div>
        <div>
          <label htmlFor="descripton">Your descripton</label>:{" "}
          <textarea id="description" rows={5} name="description" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <button type="reset">Reset</button>
      </Form>
    </div>
  );
}
