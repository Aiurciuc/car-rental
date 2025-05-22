export function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleString("en-GB", {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
}