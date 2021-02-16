import InputBase from "./InputBase";

export default {
  title: "Input",
  component: InputBase,
};

export const Small = () => <InputBase size="sm" color="red" />;

export const Medium = () => <InputBase size="md" color="green" />;

export const Green = () => <InputBase size="md" color="green" />;

export const Red = () => <InputBase size="md" color="red" />;