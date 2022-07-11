import { Input } from "./Input";

export default {
    title: "Input",
    component: Input,
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
        width: {
            type: "string",
            description: "fullWidth",
            defaultValue: "auto",
            options: ["full", "auto"],
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

}

const Template = (args) => <Input {...args}/>
export const Default = () => <Input />

export const Primary = Template.bind({})

Primary.args = {

  };

