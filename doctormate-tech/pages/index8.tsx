import { Button } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useToast } from "@chakra-ui/react";
import { runTransaction } from "firebase/firestore";

const Index8 = () => {
  const toast = useToast();
  const addLA = async () => {
    try {
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
      console.log("Document successfully written!");
      toast({
        title: "success",
        description: "Document successfully written!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  const addDC = async () => {
    try {
      await setDoc(doc(db, "cities", "DC"), {
        name: "Washington, D.C.",
        state: null,
        country: "USA",
      });
      console.log("Document successfully written!");
      toast({
        title: "success",
        description: "Document successfully written!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  const getTransaction = async () => {
    try {
      await runTransaction(db, async (transaction) => {
        const cityRef = doc(db, "cities", "LA");
        console.log(cityRef);
        const sfDoc = await transaction.get(cityRef);
        if (!sfDoc.exists()) {
          throw "Document does not exist!";
        }
        console.log(sfDoc.data());
        console.log(sfDoc.get("name"));
        transaction.update(cityRef, { name: "Tokyo" });
        const japan = {
          country: "Japan",
          name: "Tokyo",
          state: "Nagoya",
        };
        transaction.set(cityRef, japan);
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  };

  const setTransaction = async () => {
    try {
      await runTransaction(db, async (transaction) => {
        const cityRef = doc(db, "cities", "LA");
        console.log(cityRef);
        const sfDoc = await transaction.get(cityRef);
        if (!sfDoc.exists()) {
          throw "Document does not exist!";
        }

        const japan = {
          country: "Japan",
          name: "Tokyo",
          state: 126.8,
        };
        transaction.set(cityRef, japan);
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  };
  return (
    <div>
      <h1>firebase</h1>
      <Button
        onClick={() => {
          addLA();
        }}
      >
        addLA
      </Button>
      <Button
        onClick={() => {
          addDC();
        }}
      >
        addDC
      </Button>
      <Button
        onClick={() => {
          getTransaction();
        }}
      >
        getTransaction
      </Button>
      <Button
        onClick={() => {
          setTransaction();
        }}
      >
        setTransaction
      </Button>
    </div>
  );
};

export default Index8;
