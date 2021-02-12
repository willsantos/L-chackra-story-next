import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Hello World</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;
