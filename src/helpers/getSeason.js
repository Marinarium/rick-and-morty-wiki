export function getSeason (num) {
    switch (true) {
        case num >= 1 && num <= 11:
            return 1;
        case num >= 12 && num <= 21:
            return 2;
        case num >= 22 && num <= 31:
            return 3;
        case num >= 32 && num <= 41:
            return 4;
        case num >= 42 && num <= 51:
            return 5;
        case num >= 52 && num <= 61:
            return 6;
        default:
            return 7;
    }
}