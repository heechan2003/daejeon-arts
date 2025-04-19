export const formatDesc = (desc: string) => 
    desc.split('\n').map((line, key) => (
        <span
            key={key}
        >
            {line}
            <br />
        </span>
    ));