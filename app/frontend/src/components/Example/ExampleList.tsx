import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "SK의 ESG경영이란 무엇입니까?",
        value: "SK의 ESG경영이란 무엇입니까?"
    },
    { text: "SK의 Financial Story란 무엇입니까?", value: "SK의 Financial Story란 무엇입니까?" },
    { text: "SK의 지배구조에 대해 알려주세요", value: "SK의 지배구조에 대해 알려주세요" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
