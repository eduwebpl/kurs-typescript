// Array
const data: number[] = [1, 2, 3, "4"]
const genericData: Array<number> = [5, 6, 7]
typeof Array /*?*/

let randomNumber: number
randomNumber = genericData[2]

// Tuple
let setting: [string, boolean]
setting = ["darkmode", true]
setting = ["darkmode", true, 10]

// Object
let product: { name: string; price: number; count: number }

product = {
  name: "Mentoring session",
  price: 340,
  count: 2,
}

const user: { name: string; getName(): string } = {
  name: "Adam",
  getName() {
    return this.name
  },
}

// Enum
enum ExtensionType {
  doc,
  docx = 3,
  pdf,
}

ExtensionType.docx /*?*/
ExtensionType[3] /*?*/
ExtensionType["pdf"] /*?*/

function setExtension(extension: ExtensionType) {
  extension /*?*/
}
setExtension(ExtensionType.doc)
setExtension(3)

enum ExtensionTypes {
  doc = "application/msword",
  docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pdf = "application/" + "pdf",
}

ExtensionTypes.docx /*?*/
ExtensionTypes[2] /*?*/

// const Enum
const enum SubscriptionStatus {
  active,
  expired,
}

function getSubscriptions(status: SubscriptionStatus) {
  switch (status) {
    case SubscriptionStatus.active:
      return ["(active subscriptions)"]
    case SubscriptionStatus.expired:
      return ["(expired subscriptions)"]
  }
}

function getSubscriptions(status: SubscriptionStatus) {
  switch (status) {
    case 0:
      return ["(active subscriptions)"]
    case 1:
      return ["(expired subscriptions)"]
  }
}
