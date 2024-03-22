import { useState } from "react";

function useSpeakerFilter(startingShowSession) {
    const [showSession, setShowSession] = useState(startingShowSession);

    return {
        showSession,
        setShowSession,
    }
}

export default useSpeakerFilter;