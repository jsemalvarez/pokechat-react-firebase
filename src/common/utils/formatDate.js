
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    
    // Start of today (00:00:00)
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Start of yesterday
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfToday.getDate() - 1);
    
    // If the date is today, return the time (hours:minutes)
    if (date >= startOfToday) {
        return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    
    // If the date is yesterday
    if (date >= startOfYesterday) {
        return 'ayer';
    }
    
    // For dates earlier than yesterday, return the format dd/mm/yyyy
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months in JS are 0-based
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}