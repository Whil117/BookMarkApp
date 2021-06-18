import React, { FC, useState } from "react";
import {
  EmailDiv,
  EmailChildDiv,
  EmailChild2Div,
  EmailInput,
  EmailButton,
  EmailInputDiv,
  MsgSpan,
} from "../../styles/Mail/MailStyle";

export const Mail: FC = () => {
  const [email, setEmail] = useState("");
  const [buttons, setButtons] = useState("false");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    const prefix = '@gmail.com'
    const isValidEmail =
      email.substr(-10,prefix.length) !== prefix || email === prefix  ? (setButtons("error"),
      setTimeout(() => {
        setButtons("false")
      }, 1000)
      ) :( setButtons("true"),
      setTimeout(() => {
        setButtons("false")
      }, 1000)
      );
    return isValidEmail;
  };
  return (
    <EmailDiv initial={{ opacity: 0 }}  animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>
      <EmailChildDiv>
        <p>35.000+ ALREADY JOINED </p>
        <h2>Stay up-to-date with what we´re doing</h2>
        <EmailChild2Div>
          <EmailInputDiv>
            <EmailInput
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={email}
              type="email"
              required
            />
            {(buttons === "error" && (
              <MsgSpan send="error">Hey put a email</MsgSpan>
            )) ||
              (buttons === "true" && <MsgSpan send="true">Delivery</MsgSpan>)}
          </EmailInputDiv>
          <EmailButton send="false" onClick={handleSubmit}>
            Contact Us
          </EmailButton>
        </EmailChild2Div>
      </EmailChildDiv>
    </EmailDiv>
  );
};
