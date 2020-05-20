import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 30, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 5, 30, 13),
      user_id: '123123',
      provider_id: '1231231231',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1231231231');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 5, 30, 11);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: '123123',
      provider_id: '1231231231',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '123123',
        provider_id: '1231231231',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 30, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 30, 11),
        user_id: '123123',
        provider_id: '1231231231',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 30, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 30, 13),
        user_id: '123123',
        provider_id: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment outside available hours ', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 30, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 30, 7),
        user_id: 'userId',
        provider_id: 'providerId',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 5, 30, 18),
        user_id: 'userId',
        provider_id: 'providerId',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
