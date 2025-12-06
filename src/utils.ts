export const formatCompactCurrency = (num: number, currency: string): string => {
    const formatter = Intl.NumberFormat("en-US", {
        maximumFractionDigits: 1, // Change to 2 if you need more precision
    });

    const lookup = [
        { value: 1e9, symbol: "B" },
        { value: 1e6, symbol: "M" },
        { value: 1e3, symbol: "K" },
    ];

    const item = lookup.find((item) => Math.abs(num) >= item.value);

    // Determine if we need a space (e.g. "$1B" vs "LKR 1B")
    const spacer = currency.length > 1 ? " " : "";

    if (item) {
        const formattedNum = formatter.format(num / item.value);
        return `${currency}${spacer}${formattedNum}${item.symbol}`;
    }

    return `${currency}${spacer}${formatter.format(num)}`;
};