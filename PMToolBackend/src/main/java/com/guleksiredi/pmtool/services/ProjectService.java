package com.guleksiredi.pmtool.services;

import com.guleksiredi.pmtool.domain.Project;
import com.guleksiredi.pmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;


    public Project saveOrUpdateProject(Project project){

        // Logic

        return projectRepository.save(project);
    }
}
