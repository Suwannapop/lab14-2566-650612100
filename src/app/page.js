"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt={"sm"}>
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider size="xs" mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating size="sm" value={5} />
      </Group>
      <Text ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider size="xs" mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating size="sm" value={4} />
      </Group>
      <Text ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination
        position="center"
        total={20}
        color="orange"
        size="md"
        mt="md"
      />
      <Text align="center" color="dimmed" mt="sm">
        Copyright © 2023 Suppakorn Suwannapop 650612100
      </Text>
    </Container>
  );
}
