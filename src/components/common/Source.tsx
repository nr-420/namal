import { LuExternalLink } from "react-icons/lu";
import styles from "./SourceChip.module.css";

type SourceChipProps = { sourceText: string; sourceLink: string };

export function SourceChip({ sourceText, sourceLink }: SourceChipProps) {
    return (
        <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceChip}
        >
            <span>{`Source:\u00A0${sourceText}`}</span>
            <LuExternalLink />
        </a>
    );
}
