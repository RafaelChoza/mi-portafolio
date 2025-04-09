import { Slide } from "react-awesome-reveal";

const features = [
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
    {id: "hola", content: "hola"},
]

export default function Repo() {
    return (
        <div>
            <h1>Welcome to my app!</h1>

            <Slide direction="right" cascade damping={0.2} triggerOnce>
                {features.map((feature) => (
                    <div key={feature.id} className="feature-card">
                        {feature.content}
                    </div>
                ))}
            </Slide>
        </div>
    );
}