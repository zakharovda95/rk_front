export default function (): Ref<number> {
  const offset: Ref<number> = ref(0);

  const watcher = (): void => {
    offset.value = window.scrollY;
  };

  onMounted(() => {
    document.addEventListener('scroll', watcher);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', watcher);
  });

  return offset;
}
