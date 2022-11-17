class AppError {
	public code: number
	public message: string

	constructor(code: number, message: string) {
		this.code = code
		this.message = message
	}
}

class NotFoundError extends AppError {
	constructor(message: string) {
		super(404, message)
	}
}

class UnauthorizedError extends AppError {
	constructor(message: string) {
		super(401, message)
	}
}

export { AppError, NotFoundError, UnauthorizedError }
