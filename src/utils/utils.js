

export const daysDiff = (date)=>Math.abs(Math.floor((new Date(date) - new Date()) / (1000 * 60 * 60 * 24)));
