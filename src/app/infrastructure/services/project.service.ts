import { HttpClient } from "@/app/infrastructure/utils/httpClient";
import { IResponseProjects } from "@/app/core/application/dto/common/projects-response.dto";

export class ProjectsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async findAll(page: number): Promise<IResponseProjects> {
    return this.httpClient.get<IResponseProjects>(`projects?page=${page}`);
  }
}
