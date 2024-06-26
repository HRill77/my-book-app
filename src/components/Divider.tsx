import "./Divider.css";

interface IDividerProps {
    type: "horizontal" | "vertical";
}

export const Divider: React.FC<IDividerProps> = ({ type }) => {
    const className = type === "vertical" ? "vertical-divider" : "horizontal-divider";
    return <div className={className} />
}