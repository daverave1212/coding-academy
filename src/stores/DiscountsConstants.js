
export const isEarlyRegistrationOpen = false
export const earlyRegistrationDiscount = 0.1

export function getBaseDiscount() {
    if (isEarlyRegistrationOpen) {
        return earlyRegistrationDiscount
    }
    return 0
}
export function getBasePrice(price) {
    if (isEarlyRegistrationOpen) {
        return price * (1 - earlyRegistrationDiscount)
    }
    return price
}