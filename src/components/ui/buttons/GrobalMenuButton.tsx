import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-location";
import { useRef } from "react";
import { routes } from "~/router/routes";

const GrobalMenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton ref={btnRef} colorScheme="teal" onClick={onOpen} icon={<HamburgerIcon />} aria-label="menu button">
        Open
      </IconButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack>
              {routes.map((r) => (
                <Link as={RouterLink} to={r.path} key={r.name}>
                  {r.name}
                </Link>
              ))}
            </VStack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { GrobalMenuButton };
