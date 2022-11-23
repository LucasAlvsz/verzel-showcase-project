import { NotFoundError } from "@/errors"
import queryFactory from "@/factories/queryFactory"
import carRepostitory from "@/respositories/carRepostitory"
import carService from "@/services/carService"
import { createBrandData, createCarData } from "../factories/carFactory"

beforeEach(() => {
	jest.clearAllMocks()
})

describe("car service", () => {
	describe("get cars", () => {
		it("should get all cars", async () => {
			const cars = [createCarData(), createCarData()]
			jest.spyOn(carRepostitory, "getCars").mockResolvedValue(cars)

			const result = await carService.getCars()
			expect(result).toEqual(cars)
		})
	})
	describe("create car", () => {
		it("should create car", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				brandId: carData.brand.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			delete car.brand
			jest.spyOn(carRepostitory, "createCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValue(carData.brand)

			const result = await carService.createCar(car)
			expect(result).toEqual(car)
		})

		it("should not create car if brand is not found", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				brandId: carData.brand.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			delete car.brand
			jest.spyOn(carRepostitory, "createCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValue(undefined)

			await expect(carService.createCar(car)).rejects.toBeInstanceOf(NotFoundError)
		})
	})

	describe("update car", () => {
		it("should update car", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				brandId: carData.brand.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			delete car.brand
			jest.spyOn(carRepostitory, "updateCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(carData.brand)

			const result = await carService.updateCar(car.id, car)
			expect(result).toEqual(car)
		})

		it("should not update car if car is not found", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				brandId: carData.brand.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			delete car.brand
			jest.spyOn(carRepostitory, "updateCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(undefined)

			await expect(carService.updateCar(car.id, car)).rejects.toBeInstanceOf(
				NotFoundError
			)
		})

		it("should not update car if brand is not found", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				brandId: carData.brand.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			delete car.brand
			jest.spyOn(carRepostitory, "updateCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(undefined)

			await expect(carService.updateCar(car.id, car)).rejects.toBeInstanceOf(
				NotFoundError
			)
		})
	})

	describe("delete car", () => {
		it("should delete car", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				brandId: carData.brand.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			delete car.brand
			jest.spyOn(carRepostitory, "deleteCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(car)

			const result = await carService.deleteCar(car.id)
			expect(result).toEqual(car)
		})
		it("should not delete car if car is not found", async () => {
			const carData = createCarData()
			const car = {
				...carData,
				createdAt: new Date(),
				updatedAt: new Date(),
				brandId: carData.brand.id,
			}
			delete car.brand
			jest.spyOn(carRepostitory, "deleteCar").mockResolvedValue(car)
			jest.spyOn(queryFactory, "getById").mockResolvedValueOnce(undefined)

			await expect(carService.deleteCar(car.id)).rejects.toBeInstanceOf(
				NotFoundError
			)
		})
	})

	describe("get brands", () => {
		it("should get brands", async () => {
			const brands = [createBrandData(), createBrandData()]
			jest.spyOn(carService, "getBrands").mockResolvedValue(brands)

			const result = await carService.getBrands()
			expect(result).toEqual(brands)
		})
	})
})
