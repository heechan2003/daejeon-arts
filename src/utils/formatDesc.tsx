/**
 * Format description string into separate spans with <br /> applied for each line split
 *
 * @param desc - string to format.
 * @returns An array of <span> elements containing the formatted lines.
 */
export const formatDesc = (desc: string) => 
    desc.split('\n').map((line, key) => (
        <span
            key={key}
        >
            {line}
            <br />
        </span>
    ));