"use client";

import React, { useRef, useState } from "react";
import MySelect from "@/components/common/Select";
import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Radio,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ImageUpload from "@/components/common/ImageUpload";

const items = [
  { value: "0", name: "CheckBox" },
  { value: "1", name: "TextField" },
  { value: "2", name: "Option" },
  { value: "3", name: "Image" },
];
export default function Questions() {
  const [item, setItem] = useState("");
  const [question, setQuestion] = useState(<></>);
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [element, setElement] = useState(<></>);
  const [elements, setElements] = useState([{ elem: <></>, key: 0 }]);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [images, setImages] = React.useState([]);
  const [imageText, setImageText] = React.useState("");
  const [i, setI] = useState(0);
  const addQuestion = () => {
    setI(0);
    // const questionHTML =
    setQuestion(<div>Hello</div>);
  };

  const deleteElement = (index: number) => {
    console.log(index);
    setElements(elements.filter((item) => item.key !== index));
    console.log(elements);
  };

  const addElement = () => {
    setI(i + 1);
    switch (item) {
      case "0":
        setElements([
          ...elements,
          {
            elem: (
              <div className="flex gap-2">
                <Checkbox label={text} />
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={() => deleteElement(i + 1)}
                >
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </IconButton>
              </div>
            ),
            key: i + 1,
          },
        ]);
        // setElement(
        //   <>
        //     {element}
        //     <div className="flex gap-2">
        //       <Checkbox label={text} />
        //       <IconButton
        //         variant="text"
        //         color="blue-gray"
        //         onClick={(e) => console.log(e.target.parent)}
        //       >
        //         <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        //       </IconButton>
        //     </div>
        //   </>
        // );
        break;
      case "1":
        // setElement(
        //   <>
        //     {element}
        //     <Input />
        //   </>
        // );
        setElements([
          ...elements,
          {
            elem: (
              <div className="flex gap-2">
                <Input label={text} />
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={() => deleteElement(i + 1)}
                >
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </IconButton>
              </div>
            ),
            key: i + 1,
          },
        ]);
        break;
      case "2":
        // setElement(
        //   <>
        //     {element}
        //     <Radio name="type" label={text} />
        //   </>
        // );
        setElements([
          ...elements,
          {
            elem: (
              <div className="flex gap-2">
                <Radio label={text} />
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={() => deleteElement(i + 1)}
                >
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </IconButton>
              </div>
            ),
            key: i + 1,
          },
        ]);
        break;

      case "3":
        setElements([
          ...elements,
          {
            elem: (
              <>
                {images.map((image, index) => (
                  <div className="flex gap-2" key={index}>
                    <img src={image.data_url} width={width} height={height} />
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={() => deleteElement(i + 1)}
                    >
                      <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    </IconButton>
                    <h2>{imageText}</h2>
                  </div>
                ))}
              </>
            ),
            key: i + 1,
          },
        ]);
        setImages([]);
        break;
    }
    console.log(elements);
  };

  return (
    <div>
      <div className="flex flex-col border-b p-3 gap-3">
        <div>
          <Button className="float-right" onClick={addQuestion}>
            Add Question
          </Button>
        </div>
        <Input color="blue" label="Question" />
        <Textarea label="Description" />
        <div className="flex">{question}</div>
      </div>
      <div className="flex flex-wrap pt-3">
        <div className="grow px-3">
          <Input color="blue" label="Question" />
          <div className="flex gap-1 flex-col">
            {elements.map((item, index) => (
              <React.Fragment key={index}>{item.elem}</React.Fragment>
            ))}
          </div>
        </div>
        <div className="border-l pl-2 gap-3 flex flex-col">
          <MySelect items={items} onChange={(e) => setItem(e)} defaultValue="0" label="Select Element" />
          {item === "0" || item === "1" || item === "2" ? (
            <>
              <Input
                label="Question"
                onChange={(e) => setText(e.target.value)}
              />
              <Input
                label="Score"
                type="number"
                onChange={(e) => setScore(e.target.value)}
              />
            </>
          ) : (
            <div className="flex gap-3 flex-col">
              <ImageUpload setImages={setImages} images={images} />
              <Input
                type="number"
                label="width"
                onChange={(e) => setWidth(e.target.value)}
              />
              <Input
                type="number"
                label="height"
                onChange={(e) => setHeight(e.target.value)}
              />
              <Input
                label="Text"
                onChange={(e) => setImageText(e.target.value)}
              />
            </div>
          )}
          <Button onClick={addElement}>Add</Button>
        </div>
      </div>
    </div>
  );
}
