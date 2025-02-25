// eslint-disable-next-line react/prop-types
export default function FancyText({ text, center = false , size ="3xl" }) {
    return (
        <div className={`relative px-4 py-2 overflow-hidden ${center ? "flex items-center justify-center" : ""}`}>
            <h1 className={`text-${size} font-bold shimmer-text`}>{text}</h1>
            <style>{`
                .shimmer-text {
                    --shimmer-color-start: #334155;
                    --shimmer-color-mid: #94a3b8;
                    background: linear-gradient(
                        90deg,
                        var(--shimmer-color-start) 0%,
                        var(--shimmer-color-start) 40%,
                        var(--shimmer-color-mid) 50%,
                        var(--shimmer-color-start) 60%,
                        var(--shimmer-color-start) 100%
                    );
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: shimmer 2.5s infinite linear;
                }

                @media (prefers-color-scheme: dark) {
                    .shimmer-text {
                        --shimmer-color-start: #f1f5f9;
                        --shimmer-color-mid: #9333EA;
                    }
                }

                @keyframes shimmer {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }
            `}</style>
        </div>
    );
}
