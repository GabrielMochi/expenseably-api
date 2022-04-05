export class NotFoundException extends Error {
  constructor(message?: string) {
    super(message || "The item searched was not found.");
  }
}
