import { User } from "~/types/user";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };

    resBody: User[];
  };

  delete: {
    resBody: {
      status: "failed" | "success";
    };
  };
  post: {
    reqBody: {
      name: string;
    };

    resBody: User;
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  };
};
