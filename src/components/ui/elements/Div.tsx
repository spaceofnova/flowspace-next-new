import { useUserSettings } from "../../contexts/UserSettingsContext";

export default function Div({ className, children }: { className: string, children: React.ReactNode }) {
    const { userSettings } = useUserSettings();
    return (
        <div className={`${className} bg-surface/75 ${userSettings.blurEffects ? "backdrop-blur-xl" : ""}`}>
            {children}
        </div>
    )
}