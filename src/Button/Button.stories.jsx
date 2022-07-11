import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      type: "string",
      description: "Тип",
      defaultValue: "smooth",
      options: ["smooth", "square", "round"],
      control: {
        type: "radio",
      },
    },
    size : {
        type: "string",
        description: "Размер",
        defaultValue: "small",
        options: ["small", "medium", "large"],
        control: {
          type: "radio",
        },
    },
    variant : {
        type: "string",
        description: "Вариант",
        defaultValue: "default",
        options: ["default", "outline", "text"],
        control: {
          type: "radio",
        },
    },
    color : {
        type: "string",
        description: "Цвет",
        defaultValue: "default",
        options: ["default", "primary", "secondary", "danger"],
        control: {
          type: "radio",
        },
    },
    disabled : {
        type: "boolean",
        description: "disabled",
        defaultValue: false,
        options: [false, true],
        control: {
          type: "radio",
        },
    },
    startIcon : {
        type: "boolean",
        description: "startIcon",
        defaultValue: false,
        options: [false, true],
        control: {
          type: "radio",
        },
    },
    endIcon : {
        type: "boolean",
        description: "startIcon",
        defaultValue: false,
        options: [false, true],
        control: {
          type: "radio",
        },
    },
    
  },
};

const Template = (args) => <Button {...args} />;
export const Default = () => <Button />;

export const Primary = Template.bind({});


Primary.args = {
  children: "Default",
  size: "small",
  type: "primary",
  variant: "default",
};
