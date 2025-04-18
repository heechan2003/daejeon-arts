export const formatDesc = (desc: string) => 
    desc.split('\n').map((line) => (
        <span>
            {line}
            <br />
        </span>
    ));