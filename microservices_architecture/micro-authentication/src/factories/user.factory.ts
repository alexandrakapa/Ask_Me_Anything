import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { UserEntity } from './../user/entities/user.entity';

define(UserEntity, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  // const firstName = faker.name.firstName(gender);
  // const lastName = faker.name.lastName(gender);
  const username = faker.internet.userName;
  const user = new UserEntity();
  // user.FirstName = `${firstName}`;
  // user.LastName = `${lastName}`;
  user.username = `${username}`;
  user.password = faker.random.word();
  return user;
});
